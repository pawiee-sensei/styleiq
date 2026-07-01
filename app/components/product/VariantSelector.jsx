import {Link, useLocation} from 'react-router';

export function VariantSelector({options, variants}) {
  const {search} = useLocation();
  const params = new URLSearchParams(search);

  return (
    <div className="variant-selector">
      {options.map((option) => (
        <div key={option.name} className="variant-group">
          <label className="variant-label">
            {option.name.toUpperCase()}
          </label>
          <div className="variant-options">
            {option.optionValues.map((value) => {
              const newParams = new URLSearchParams(params);
              newParams.set(option.name, value.name);

              const isSelected =
                params.get(option.name) === value.name ||
                (!params.get(option.name) &&
                  option.optionValues[0].name === value.name);

              const isColor = option.name.toLowerCase() === 'color';

              return (
                <Link
                  key={value.name}
                  to={`?${newParams.toString()}`}
                  preventScrollReset
                  replace
                  className={`variant-option
                    ${isSelected ? 'selected' : ''}
                    ${isColor ? 'color-swatch' : 'size-option'}
                  `}
                  style={
                    isColor
                      ? {backgroundColor: value.name.toLowerCase()}
                      : {}
                  }
                  title={value.name}
                >
                  {!isColor && value.name}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}