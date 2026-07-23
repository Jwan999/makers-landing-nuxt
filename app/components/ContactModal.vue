<script setup lang="ts">
const { isOpen, presetService, close } = useContactModal()

// WhatsApp business number (digits only, international format, no +).
const WHATSAPP_NUMBER = '9647834915325'

const SERVICES = [
  'Training Halls',
  'Curriculum Development',
  'Co-Working Spaces',
  'Financial Understanding',
  'Investment Readiness',
  'Something else',
]

const form = reactive({
  name: '',
  phone: '',
  service: '',
  description: '',
})

const errors = reactive({ name: false, phone: false, service: false })
const nameInput = ref<HTMLInputElement | null>(null)

function resetForm() {
  form.name = ''
  form.phone = ''
  form.service = ''
  form.description = ''
  errors.name = errors.phone = errors.service = false
}

function validate() {
  errors.name = form.name.trim().length === 0
  errors.phone = form.phone.trim().length < 6
  errors.service = form.service.trim().length === 0
  return !errors.name && !errors.phone && !errors.service
}

function submit() {
  if (!validate()) return
  const lines = [
    'New inquiry from the Makers website',
    '',
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Service: ${form.service}`,
  ]
  if (form.description.trim()) {
    lines.push('', `Details: ${form.description.trim()}`)
  }
  const text = encodeURIComponent(lines.join('\n'))
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener')
  close()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

// Sync the preset service, lock body scroll, focus first field, wire Escape.
watch(isOpen, async (open) => {
  if (open) {
    form.service = presetService.value && SERVICES.includes(presetService.value)
      ? presetService.value
      : ''
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
    await nextTick()
    nameInput.value?.focus()
  } else {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKeydown)
    resetForm()
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="cm-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"
          @click="close"
        />

        <!-- Card -->
        <Transition name="cm-pop" appear>
          <div
            v-if="isOpen"
            class="relative w-full sm:max-w-lg bg-white text-zinc-950 rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            <div class="p-6 sm:p-8">
              <!-- Header -->
              <div class="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div class="mono mb-2" style="color: var(--orange);">GET IN TOUCH</div>
                  <h3 id="contact-modal-title" class="text-[26px] sm:text-[30px] font-bold leading-tight">
                    Tell us what you need
                  </h3>
                </div>
                <button
                  type="button"
                  class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 transition-colors"
                  aria-label="Close"
                  @click="close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form class="flex flex-col gap-5" @submit.prevent="submit">
                <!-- Name -->
                <div>
                  <label class="cm-label" for="cm-name">Your name</label>
                  <input
                    id="cm-name"
                    ref="nameInput"
                    v-model="form.name"
                    type="text"
                    class="cm-input"
                    :class="errors.name ? 'cm-input-error' : ''"
                    placeholder="e.g. Sara Ahmed"
                  />
                  <p v-if="errors.name" class="cm-err">Please enter your name.</p>
                </div>

                <!-- Phone -->
                <div>
                  <label class="cm-label" for="cm-phone">Phone number</label>
                  <input
                    id="cm-phone"
                    v-model="form.phone"
                    type="tel"
                    inputmode="tel"
                    class="cm-input"
                    :class="errors.phone ? 'cm-input-error' : ''"
                    placeholder="+964 …"
                  />
                  <p v-if="errors.phone" class="cm-err">Please enter a valid phone number.</p>
                </div>

                <!-- Service -->
                <div>
                  <label class="cm-label" for="cm-service">What are you interested in?</label>
                  <div class="relative">
                    <select
                      id="cm-service"
                      v-model="form.service"
                      class="cm-input appearance-none pr-10"
                      :class="errors.service ? 'cm-input-error' : (form.service ? '' : 'text-zinc-400')"
                    >
                      <option value="" disabled>Select a service…</option>
                      <option v-for="s in SERVICES" :key="s" :value="s">{{ s }}</option>
                    </select>
                    <svg class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <p v-if="errors.service" class="cm-err">Please choose a service.</p>
                </div>

                <!-- Description -->
                <div>
                  <label class="cm-label" for="cm-desc">Tell us more <span class="text-zinc-400 font-normal">(optional)</span></label>
                  <textarea
                    id="cm-desc"
                    v-model="form.description"
                    rows="4"
                    class="cm-input resize-none"
                    placeholder="A few words about what you're looking for…"
                  />
                </div>

                <button
                  type="submit"
                  class="mt-1 inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-4 font-bold text-white leading-none transition-transform active:scale-[0.99]"
                  style="background: var(--orange);"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.34-.5.05-.5.4-3.15-.66-2.66-1.05-4.34-3.76-4.47-3.94-.13-.18-1.07-1.42-1.07-2.71s.68-1.92.92-2.19c.24-.26.53-.33.7-.33.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.58.8 2 .87 2.14.07.14.12.31.02.49-.09.18-.14.29-.28.45-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.24 1.39.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.86.27.13.44.2.5.31.07.11.07.63-.17 1.31Z" />
                  </svg>
                  Send via WhatsApp
                </button>
                <p class="text-center text-[13px] text-zinc-500 -mt-1">
                  Opens WhatsApp with your message ready to send.
                </p>
              </form>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cm-label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #27272a; /* zinc-800 */
}
.cm-input {
  width: 100%;
  border: 1.5px solid #e4e4e7; /* zinc-200 */
  background: #fafafa; /* zinc-50 */
  border-radius: 14px;
  padding: 13px 16px;
  font-size: 16px;
  color: #18181b;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  outline: none;
}
.cm-input::placeholder {
  color: #a1a1aa; /* zinc-400 */
}
.cm-input:focus {
  border-color: var(--orange);
  background: #fff;
}
.cm-input-error {
  border-color: #ef4444; /* red-500 */
}
.cm-err {
  margin-top: 6px;
  font-size: 13px;
  color: #dc2626; /* red-600 */
}

/* Backdrop + card transitions */
.cm-fade-enter-active,
.cm-fade-leave-active {
  transition: opacity 0.25s ease;
}
.cm-fade-enter-from,
.cm-fade-leave-to {
  opacity: 0;
}
.cm-pop-enter-active {
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
}
.cm-pop-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.cm-pop-enter-from,
.cm-pop-leave-to {
  transform: translateY(16px) scale(0.98);
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .cm-fade-enter-active,
  .cm-fade-leave-active,
  .cm-pop-enter-active,
  .cm-pop-leave-active {
    transition: none;
  }
}
</style>
