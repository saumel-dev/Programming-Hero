import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Myself = () => {
    const newAsset = useContext(AssetContext);
    return (
        <div>
            <h3>Myself</h3>
            <p>{newAsset}</p>
        </div>
    );
};

export default Myself;