import { ChatTeardropDots, Heart } from 'phosphor-react';
import { useState } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {

  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      {/* <Transition
        enter="transition duration-100 ease-out"
        enterFrom="translate-y-1 scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="translate-y-1 duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>
      </Transition> */}
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}