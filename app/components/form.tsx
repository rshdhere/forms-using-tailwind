import cn from '@/lib/utils';
import React from 'react';

export default function Form() {
  return (
    <form className="h-full w-full bg-gray-50 px-8 py-14">
      <h1 className="bg-gradient-to-b from-neutral-800 to-neutral-700 bg-clip-text text-4xl font-bold tracking-tighter text-transparent">
        this is a{' '}
        <span
          className={cn(
            'relative z-10 inline-block text-white',
            "after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:-skew-2 after:bg-red-500 after:content-['']",
          )}
        >
          crazy
        </span>{' '}
        good form
      </h1>
    </form>
  );
}
