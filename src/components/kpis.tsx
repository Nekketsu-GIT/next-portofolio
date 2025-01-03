const KPI = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-darkgoldenrod">{value}</h2>
      <p>{text}</p>
    </div>
  );
};

export default function Kpis({
  years_of_experience,
  projects_completed,
  clients,
  reviews,
}: {
  years_of_experience?: string;
  projects_completed?: string;
  clients?: string;
  reviews?: string;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full bg-yaleblue text-white py-8 rounded-lg">
      {years_of_experience && (
        <KPI text="Years of experience" value={years_of_experience} />
      )}
      {projects_completed && (
        <KPI text="Projects completed" value={projects_completed} />
      )}
      {clients && <KPI text="Clients" value={clients} />}
      {reviews && <KPI text="Reviews" value={reviews} />}
    </section>
  );
}
