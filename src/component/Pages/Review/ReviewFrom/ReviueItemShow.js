import { IoStarHalf } from 'react-icons/io5';
import { Tr, Td } from 'react-super-responsive-table';

const ReviueItemShow = ({ showReviue }) => {

    return (

        <Tr>

            <Td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={showReviue?.picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{showReviue?.name}</div>
                        <span className=" badge-sm">{showReviue?.details}</span>
                    </div>
                </div>
            </Td>

            <Td> <div className='flex  items-center justify-end gap-2 text-amber-500 font-bold'>
                <IoStarHalf></IoStarHalf>
                {showReviue?.reting}
                </div>
                </Td>

        </Tr>
    );
};

export default ReviueItemShow;