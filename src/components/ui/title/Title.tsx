interface Props {
  title: string;
  subTitle?: string;
  className?: string;
}

const Title = ({ title, subTitle, className }: Props) => {
  return <div className={`mt-3 ${className}`}>
    <h1 className="antialiased font-semibold text-4xl my-7">{title}</h1>
    {subTitle && 
    <h3 className="text-xl mb-5">{subTitle}</h3>
    }

  </div>;
};

export default Title;
