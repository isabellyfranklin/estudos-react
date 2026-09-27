interface Props {
  number: number;
}

export function SquareNumber({ number }: Props) {
  return (
    <p>
      <b>Número: </b>
      {number} - <b>Quadrado do número: </b> {Math.pow(number, 2)}
    </p>
  );
}
