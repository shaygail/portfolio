
export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex translate-y-100 items-center justify-left space-x-[3%]">

          <h2 className="w-fit font-general text-5xl sm:text-heading-2 font-semibold lowercase text-secondary-600">
            {title}
          </h2>

        </div>
      </div>
    </>
  );
}