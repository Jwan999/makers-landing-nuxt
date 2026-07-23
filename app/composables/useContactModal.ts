// Shared open/close state for the site-wide contact modal.
// Any component can call `useContactModal().open()` to trigger it.
export const useContactModal = () => {
  const isOpen = useState('contactModalOpen', () => false)
  // Optional service to pre-select when opening (e.g. from a services card).
  const presetService = useState<string | null>('contactModalService', () => null)

  const open = (service?: string) => {
    presetService.value = service ?? null
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }

  return { isOpen, presetService, open, close }
}
