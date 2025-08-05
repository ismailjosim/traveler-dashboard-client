import { AiOutlineWarning } from 'react-icons/ai'

const DestinationError = ({ message }) => {
    console.log(message)
    return (
        <div
            className="flex items-center justify-center gap-4 w-4/12 mx-auto rounded border border-pink-100 bg-pink-50 px-4 py-3 text-sm text-error"
            role="alert"
        >
            <AiOutlineWarning size={ 30 } />
            <div>
                <h3 className="mb-2 font-semibold">Data Load failed!</h3>
                <p className='flex'>{ message.error }{ message.status }</p>
            </div>
        </div>

    );
};

export default DestinationError;
