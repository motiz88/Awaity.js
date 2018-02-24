import series from './internal/series';

export default function mapSeries(iterable, mapper) {
  return Promise.all(iterable)
    .then(series((results, value, key, values) => {
      return Promise.resolve(value)
        .then(resolved => mapper(resolved, key, values))
        .then(resolved => [...results, resolved]);
    }));
}
