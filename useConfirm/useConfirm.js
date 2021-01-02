export const useConfirm = (message = "", onConfirm, onRefuse) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onRefuse && typeof onRefuse !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onRefuse();
    }
  };
  return confirmAction;
};
