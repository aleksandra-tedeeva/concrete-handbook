// если значение существует, добавляет к нему единицы измерения
// возвращает '-', если значения нет
export default function t(str: TemplateStringsArray, value: string | number) {
  const v = String(value).trim();
  return v ? `${str[0]}${v}${str[1]}` : `-`;
}
