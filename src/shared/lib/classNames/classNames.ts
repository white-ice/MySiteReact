type Mods = Record<string, boolean | string>;

// classNames('class name', {'class name': Boolean, }, ['class name', 'class name'])

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[],
): string {
  return [
    cls,
    ...((additional && additional.filter(Boolean)) || []),
    ...((mods && Object.entries(mods)) || [])
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
