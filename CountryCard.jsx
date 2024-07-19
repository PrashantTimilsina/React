// eslint-disable-next-line

const CountryCard = ({ country }) => {
  // eslint-disable-next-line
  const { flags, name, languages, capital } = country;

  return (
    <div className="p-3 w-60 bg-gray-100 shadow-lg">
      {/* eslint-disable */}
      <img src={flags.png} alt="country" />
      <h2 className="flex justify-center font-bold text-xl shadow-2xl">
        Name:{name.common}
      </h2>
      <h3 className="flex justify-center">{languages?.eng}</h3>
      <h4 className="flex justify-center">Capital:{capital?.at(0)}</h4>
    </div>
  );
};

export default CountryCard;
