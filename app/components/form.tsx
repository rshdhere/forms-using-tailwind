import cn from '@/lib/utils';
import React from 'react';

export default function Form() {
  return (
    <form className="h-full w-full bg-gray-50 px-8 py-14">
      <h1 className="bg-gradient-to-b from-neutral-800 to-neutral-700 bg-clip-text text-center text-4xl font-bold tracking-tighter text-transparent">
        this is a{' '}
        <span
          className={cn(
            'relative z-10 inline-block text-white',
            // after: pseudo element
            "after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:-skew-2 after:bg-red-500 after:content-['']",
          )}
        >
          crazy
        </span>{' '}
        good form
      </h1>

      <div className="mx-auto my-12 flex max-w-sm flex-col gap-8">
        <Group>
          <Label
            htmlFor="firstname"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            First Name
          </Label>
          <Input
            name="firstname"
            type="text"
            placeholder="Enter your first name"
          />
        </Group>
        <Group>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            name="lastname"
            type="text"
            placeholder="Enter your last name"
          />
        </Group>
        <Group>
          <Label
            htmlFor="email"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Email
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="invalid:border-red-500 invalid:shadow-none"
          />
        </Group>
        <Group>
          <Label
            htmlFor="password"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            Password
          </Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </Group>
        <button
          className={cn(
            'rounded-md bg-black px-4 py-2 text-white',
            'cursor-pointer transition duration-150',
            'hover:-translate-y-0.5 hover:bg-neutral-700',
            // to give that clicked effect on the button
            'active:scale-98',
          )}
        >
          Send that text now
        </button>
      </div>
    </form>
  );
}

const Label = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={cn('cursor-pointer font-medium text-neutral-700', className)}
    >
      {children}
    </label>
  );
};

const Input = ({
  className,
  ...props
}: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={cn(
        'shadow-input rounded-lg border border-transparent bg-white px-4 py-2 transition-all duration-200 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2 focus:outline-none',
        className,
      )}
    />
  );
};

const Group = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
