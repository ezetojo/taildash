import PageHeader from "@/components/PageHeader";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function FourOhFour() {
  return (
    <>
      <PageHeader
        title="Error"
        icon={<ExclamationCircleIcon className="h-6 w-6 inline-block mr-2" />}
      />
      <main className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-red-800">
          La página solicitada no existe o no puede ser accedida en este
          momento.
        </p>
      </main>
    </>
  );
}
