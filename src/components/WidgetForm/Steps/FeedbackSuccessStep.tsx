import { CloseButton } from "../../CloseButton";

// IMPORT IMAGES
import successImageUrl from '../../../assets/Success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[19rem]">
        <img src={successImageUrl} alt="Imagem de um ícone de visto" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-smd border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-200 ease-linear"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}