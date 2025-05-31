import Image from 'next/image'

export default function JoinImage({ image }: { image: string }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%]">
        <Image
          src={`/join/${image}`}
          alt="Project screenshot"
          width={700}
          height={500}
          className="w-full h-auto max-h-[20vh] md:max-h-[40vh] object-contain"
        />
      </div>
    </div>
  )
}