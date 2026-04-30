import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    console.log('activeid', activeId, categories.category_id);
    
    return (
        <div>
            <h2 className="text-lg font-bold">All Categories</h2>
            <ul className="gap-3 mt-6 flex flex-col">

                {
                    categories.map(category => {
                        return <li
                            key={category.category_id}
                            className={`${activeId === category.category_id? "bg-red-300" : "bg-slate-100"}   rounded-md font-bold text-center text-xl `}
                            ><Link className='block p-2' href={`/category/${category.category_id}`}>{category.category_name}</Link></li>
                    }
                    )
                }
                
            </ul>
        </div>
    );
};

export default LeftSidebar;