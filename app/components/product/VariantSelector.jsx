import {Link, useSearchParams} from 'react-router';

// Map common color names to hex values
const COLOR_MAP = {
  green: '#4a7c59',
  olive: '#6b6b2a',
  purple: '#6b3fa0',
  red: '#c0392b',
  blue: '#2980b9',
  black: '#1a1a1a',
  white: '#f5f5f5',
  navy: '#1a2a4a',
  grey: '#808080',
  gray: '#808080',
  beige: '#c8ad8f',
  brown: '#7B4F2E',
  pink: '#e91e8c',
  yellow: '#f1c40f',
  orange: '#e67e22',
};

export function VariantSelector({options, variants}) {
  const [searchParams] = useSearchParams();

  return (
    <div className="variant-selector">
      {options.map((option) => {
        const isColor = option.name.toLowerCase() === 'color';

        return (
          <div key={option.name} className="variant-group">
            <label className="variant-label">
              {option.name.toUpperCase()}
              {isColor && (
                <span className="variant-selected-name">
                  {' '}— {searchParams.get(option.name) || option.optionValues[0]?.name}
                </span>
              )}
            </label>
            <div className="variant-options">
                {option.optionValues.map((value) => {
                  const newParams = new URLSearchParams(searchParams);
                  newParams.set(option.name, value.name);

                  const isSelected =
                    searchParams.get(option.name) === value.name ||
                    (!searchParams.get(option.name) &&
                      option.optionValues[0].name === value.name);

                  // ── Check if any variant with this option is available ──
                  const isAvailable = variants.some(
                    (v) =>
                      v.availableForSale &&
                      v.selectedOptions.some(
                        (o) => o.name === option.name && o.value === value.name,
                      ),
                  );
                  
                  // ── Find variant image for this color ──
                  const variantImage = variants.find(
                    (v) =>
                      v.selectedOptions.some(
                        (o) => o.name === option.name && o.value === value.name,
                      ) && v.image?.id,
                  );

                  // ── Hide colors with no image or unavailable ──
                  if (isColor && (!isAvailable || !variantImage)) return null;

                  if (isColor) {
                    const hexColor =
                      COLOR_MAP[value.name.toLowerCase()] ||
                      value.name.toLowerCase();

                    return (
                      <Link
                        key={value.name}
                        to={`?${newParams.toString()}`}
                        preventScrollReset
                        replace
                        className={`color-swatch ${isSelected ? 'selected' : ''}`}
                        style={{backgroundColor: hexColor}}
                        title={value.name}
                      />
                    );
                  }

                  // ── For sizes show as unavailable instead of hiding ──
                  return (
                    <Link
                      key={value.name}
                      to={`?${newParams.toString()}`}
                      preventScrollReset
                      replace
                      className={`size-option ${isSelected ? 'selected' : ''} ${!isAvailable ? 'unavailable' : ''}`}
                    >
                      {value.name}
                    </Link>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}