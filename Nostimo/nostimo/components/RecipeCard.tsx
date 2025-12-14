import React from 'react';
import { Recipe } from '@shared/types';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="w-full bg-white">
      {/* Header with author info */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={recipe.author.avatar}
            alt={recipe.author.username}
            className="w-9 h-9 rounded-full object-cover"
          />
          <span
            className="text-sm font-normal"
            style={{ fontFamily: 'ABeeZee, system-ui', color: '#000' }}
          >
            {recipe.author.username}
          </span>
        </div>
        <button className="text-gray-800 text-lg font-bold">⋮</button>
      </div>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover"
      />

      {/* Recipe Info Section */}
      <div className="px-4 py-5 space-y-3">
        {/* Comments and Saves */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9.5c.0035 1.32-.3049 2.622-.9 3.8-.705 1.412-1.790 2.599-3.132 3.429-1.343.83-2.889 1.27-4.468 1.271H11c-1.818.0035-3.561-.896-4.65-2.4L1 19l1.9-5.7c-.595-1.178-.906-2.48-.9-3.8C2.00064 7.92179 2.44064 6.37488 3.27075 5.03258C4.10085 3.69028 5.28828 2.6056 6.70003 1.90003C7.87814 1.30496 9.18016.996587 10.5 1.00003H11C13.0844 1.11502 15.0531 1.99479 16.5292 3.47089C18.0053 4.94699 18.885 6.91568 19 9.00003V9.5Z"
              />
            </svg>
            <span
              className="text-sm font-normal"
              style={{ fontFamily: 'ABeeZee, system-ui' }}
            >
              {recipe.comments}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5z"
              />
            </svg>
            <span
              className="text-sm font-normal"
              style={{ fontFamily: 'ABeeZee, system-ui' }}
            >
              {recipe.saves}
            </span>
          </div>

          {/* Rating */}
          <div className="ml-auto flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4"
                  fill="#FCD53F"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span
              className="text-xs font-normal"
              style={{ fontFamily: 'ABeeZee, system-ui' }}
            >
              {recipe.rating}
            </span>
          </div>
        </div>

        {/* Recipe Title */}
        <h2
          className="text-xl font-normal leading-none"
          style={{ fontFamily: 'ABeeZee, system-ui', color: '#000' }}
        >
          {recipe.title}
        </h2>

        {/* Recipe Type */}
        <p
          className="text-sm font-normal"
          style={{ fontFamily: 'ABeeZee, system-ui', color: '#000' }}
        >
          {recipe.type}
        </p>

        {/* Recipe Stats */}
        <div className="pt-3 grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg
                className="w-8 h-8"
                fill="#E0831F"
                viewBox="0 0 37 37"
              >
                <circle cx="18.5" cy="18.5" r="9" fill="none" stroke="#E0831F" strokeWidth="2" />
                <path d="M18 12v7h5" stroke="#E0831F" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <span
              className="text-xs font-normal text-center"
              style={{ fontFamily: 'Rubik, system-ui', color: '#5A5A5A', fontSize: '11px' }}
            >
              Thời gian
            </span>
            <span
              className="text-xs font-normal text-center"
              style={{ fontFamily: 'Rubik, system-ui', color: '#000', fontSize: '11px' }}
            >
              {recipe.time}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg
                className="w-8 h-8"
                fill="#E0831F"
                viewBox="0 0 37 37"
              >
                <circle cx="13" cy="11" r="2" fill="#E0831F" />
                <circle cx="24" cy="11" r="2" fill="#E0831F" />
                <path d="M7 24h22c0-3 -4-5 -8-5H15c-4 0 -8 2 -8 5Z" fill="#E0831F" />
              </svg>
            </div>
            <span
              className="text-xs font-normal text-center"
              style={{ fontFamily: 'Rubik, system-ui', color: '#5A5A5A', fontSize: '11px' }}
            >
              Khẩu phần
            </span>
            <span
              className="text-xs font-normal text-center"
              style={{ fontFamily: 'Rubik, system-ui', color: '#000', fontSize: '11px' }}
            >
              {recipe.servings}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg
                className="w-8 h-8"
                fill="#E0831F"
                viewBox="0 0 33 33"
              >
                <path d="M16.5 2C8.49 2 2 8.49 2 16.5S8.49 31 16.5 31 31 24.51 31 16.5 24.51 2 16.5 2zm0 28C9.38 30 3 23.62 3 16.5S9.38 3 16.5 3 30 9.38 30 16.5 23.62 30 16.5 30zm0-24c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" fill="#E0831F" />
              </svg>
            </div>
            <span
              className="text-xs font-normal text-center"
              style={{ fontFamily: 'Rubik, system-ui', color: '#5A5A5A', fontSize: '11px' }}
            >
              Độ Khó
            </span>
            <span
              className="text-xs font-normal text-center"
              style={{ fontFamily: 'Rubik, system-ui', color: '#000', fontSize: '11px' }}
            >
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Total Ratings */}
        <p
          className="text-sm font-normal text-right"
          style={{ fontFamily: 'ABeeZee, system-ui', color: '#000' }}
        >
          {recipe.totalRatings} đánh giá
        </p>
      </div>
    </div>
  );
};
