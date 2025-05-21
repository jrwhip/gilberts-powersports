import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src="/img/gilbert-full-logo.svg"
        alt="Company Logo"
        width={192}
        height={40}
        priority
      />
    </div>
  )
}