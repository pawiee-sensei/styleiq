import {Link} from 'react-router';

export function VariantSelector({options, variants}) {
  return (
    <div className="variant-selector">
      {options.map((option) => (
        <div key={option.name} className="variant-group">
          <label className="variant-label">
            {option.name.toUpperCase()}
          </label>
          <div className="variant-options">
            {option.optionValues.map((value) => {
              const variant = variants.find((v) =>
                v.selectedOptions.some(
                  (o) => o.name === option.name && o.value === value.name,
                ),
              );
              const isAvailable = variant?.availableForSale ?? false;
              const isColor = option.name.toLowerCase() === 'color';

              return (
                <Link
                  key={value.name}
                  to={value.selected ? '#' : `?${value.name}`}
                  className={`variant-option
                    ${value.selected ? 'selected' : ''}
                    ${!isAvailable ? 'unavailable' : ''}
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