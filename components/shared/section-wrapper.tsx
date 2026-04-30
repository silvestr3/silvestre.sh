export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
}

export function SectionWrapper({ children, id }: SectionWrapperProps) {
  return (
    <section id={id} className="w-[min(100%,1300px)] mx-auto p-4 md:px-12 lg:px-16 mb-20">
      {children}
    </section>
  );
}
