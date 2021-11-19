export default function parse(data) {
  const { records } = data;
  return records.map((data) => ({
    ...data,
    ...data.fields,
  }));
}
