export interface SectionWrapperProps {
  children: React.ReactNode;
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section className="w-[min(100%,1300px)] mx-auto p-4 md:px-12 lg:px-16 mb-20">
      {children}
    </section>
  );
}
