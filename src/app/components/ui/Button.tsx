"use client"
interface ButtonProps {
  title: string
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <div>
      <button
        className="bg-primary text-white text-[10px] rounded-full px-2 py-0.5 cursor-pointer hover:bg-primary/40 hover:text-primary"
        onClick={() => console.log("fui clicado")}
      >
        {title}
      </button>
    </div>
  )
}