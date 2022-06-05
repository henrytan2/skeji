interface Props {
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    labelText: string;
}

export const DatePicker = (props: Props) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        </div>
        <label>{props.labelText}</label>
        <input type="date"
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={
            (e) => {
                const date = e.target.value;
                const dateLocale = new Date(new Date(date).toLocaleDateString())
                props.setDate(dateLocale);
            }
        }/>
      </div>
    </>
  );
};
