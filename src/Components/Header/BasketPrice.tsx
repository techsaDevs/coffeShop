// BasketPrice.tsx
interface Props {
  price: number;
  off?: number;
}

const BasketPrice = ({ price, off = 0 }: Props) => {
  const discountAmount = (price * off) / 100;
  const finalPrice = price - discountAmount;

  return (
<div className="flex flex-col">
  {off > 0 && (
    <span className="text-foregreen text-xs">
      {discountAmount.toLocaleString()} تومان تخفیف
    </span>
  )}
  <span className="font-dana-dbold text-lg">
    {finalPrice.toLocaleString()} تومان
  </span>
</div>

  );
};

export default BasketPrice;
