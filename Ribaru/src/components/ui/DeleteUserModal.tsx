interface DeleteUserModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function DeleteUserModal({ isOpen, onClose, onConfirm }: DeleteUserModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4">Delete User</h3>
        <p className="text-gray-600 mb-6 font-mono">
          Are you sure you want to delete this user? This action cannot be undone.
        </p>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-mono hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 px-4 bg-red-500 text-white rounded-lg font-mono hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
