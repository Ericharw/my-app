export const TombolBantuan = ({ label }: { label: string }) => {
  return (
    <button data-testid="btn-bantuan" className="bg-blue-500 text-white">
      {label}
    </button>
  );
};