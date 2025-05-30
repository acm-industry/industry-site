import Image from 'next/image'

export default function JoinImage({ image }: { image: string }) {
  return (
    <div className="w-1/2 flex justify-center items-center">
      <div className="w-[80%] rounded-xl overflow-hidden shadow-xl">
        <Image
          src={image}
          alt="Project screenshot"
          width={700}
          height={500}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  )
}