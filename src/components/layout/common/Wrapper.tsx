export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-10">
      {children}
    </section>
  );
};
