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
        <span className="text-foregreen font-dana-medium tracking-tighter text-xs">
          {discountAmount.toLocaleString()} تومان تخفیف
        </span>
      )}
        <div className="space-x-1">
            <span className="font-dana-dbold text-lg">{finalPrice.toLocaleString()}</span>
            <span className="font-dana text-sm">تومان</span>
        </div>
    </div>

  );
};

export default BasketPrice;