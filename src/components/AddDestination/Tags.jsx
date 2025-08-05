import React, { useState, useRef, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlinePlusCircle } from 'react-icons/ai';



const Tags = ({ excludedTags, setExcludedTags, includedTags, setIncludedTags }) => {
    const [inputValue, setInputValue] = useState('');
    const [tagSuggestions, setTagSuggestions] = useState([]);
    const inputRef = useRef(null);


    const addTag = (tag) => {
        const newExcludedTags = excludedTags.filter((excludedTag) => excludedTag !== tag);
        const newIncludedTags = [...includedTags, tag];
        setExcludedTags(newExcludedTags);
        setIncludedTags(newIncludedTags);
    };

    const removeTag = (tag) => {
        const newIncludedTags = includedTags.filter((includedTag) => includedTag !== tag);
        const newExcludedTags = [...excludedTags, tag];
        setIncludedTags(newIncludedTags);
        setExcludedTags(newExcludedTags);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value === '') {
            setTagSuggestions([]);
        } else {
            const filteredSuggestions = excludedTags.filter(
                (excludedTag) =>
                    excludedTag.toLowerCase().includes(value.toLowerCase()) && !includedTags.includes(excludedTag)
            );
            setTagSuggestions(filteredSuggestions);
        }
    };

    const handleTagClick = (tag) => {
        addTag(tag);
        setInputValue('');
        setTagSuggestions([]);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue !== '') {
            addTag(inputValue);
            setInputValue('');
            setTagSuggestions([]);
        }
    };

    const handleOutsideClick = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setTagSuggestions([]);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="">
            <label className="label font-poppins font-semibold capitalize">includes & excludes</label>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                onKeyDown={ handleInputKeyDown }
                placeholder="Press enter to add tags"
                className="input input-primary w-full"
                ref={ inputRef }
                onClick={ () =>
                    setTagSuggestions(
                        excludedTags.filter((excludedTag) => !includedTags.includes(excludedTag))
                    )
                }
            />

            <ul id="tags" className="flex flex-wrap p-0 m-0">
                { includedTags.map((tag, index) => (
                    <li
                        key={ index }
                        className="tag flex items-center justify-center text-white px-2 py-1 m-1 bg-primary rounded"
                    >
                        <span className="tag-title">{ tag }</span>
                        <span className="tag-close-icon text-white ml-2" onClick={ () => removeTag(tag) }>
                            <RxCross2 />
                        </span>
                    </li>
                )) }
            </ul>

            <div>
                { tagSuggestions.length > 0 && (
                    <ul className="absolute grid grid-cols-3 gap-0">
                        { tagSuggestions.map((suggestion, index) => (
                            <li
                                key={ index }
                                className="my-2 flex items-center"
                                onClick={ () => handleTagClick(suggestion) }
                            >
                                <span className="text-white btn btn-primary btn-sm">
                                    { suggestion }
                                    <AiOutlinePlusCircle />
                                </span>
                            </li>
                        )) }
                    </ul>
                ) }
            </div>
        </div>
    );
};

export default Tags;
