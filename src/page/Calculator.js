import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addition,
  deleteValue,
  division,
  multiplication,
  percent,
  refreshValue,
  resultCalculation,
  substraction,
  typeValue,
} from "../features/counter/calculateSlice";

const Calculator = () => {
  const { value, history } = useSelector((state) => state.calculate);
  const dispatch = useDispatch();

  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 border border-black rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="p-5 text-black text-center text-3xl bg-current">
        <span className="text-white">Calculator</span>
      </div>
      <div className="pt-16 p-5 pb-0 h-24 text-white text-right text-3xl bg-slate-900">
        {history[history.length - 1]}
      </div>
      <div className="p-5 text-white text-right text-3xl bg-slate-900">
        <span className="text-orange-500">{value === "" ? "0" : value}</span>
      </div>
      <div className="flex items-stretch bg-current h-24">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(refreshValue())}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            AC
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(deleteValue())}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            Del
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(percent())}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            %
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(division())}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            ÷
          </div>
        </div>
      </div>

      <div className="flex items-stretch bg-current h-24">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(7))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            7
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(8))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            8
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(9))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            9
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(multiplication())}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            x
          </div>
        </div>
      </div>

      <div className="flex items-stretch bg-current h-24">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(4))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            4
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(5))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            5
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(6))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            6
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(substraction())}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            -
          </div>
        </div>
      </div>

      <div className="flex items-stretch bg-current h-24">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(1))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            1
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(2))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            2
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(3))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            3
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(addition())}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            +
          </div>
        </div>
      </div>

      <div className="flex items-stretch bg-current h-24">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2  focus:outline-none"></div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(typeValue(0))}
            className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2 hover:bg-gray-600 hover:border-2 hover:border-gray-600 focus:outline-none"
          >
            0
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-lg h-20 w-20 flex items-center bg-slate-900 justify-center shadow-lg border-2  focus:outline-none"></div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div
            onClick={() => dispatch(resultCalculation())}
            className="rounded-lg h-20 w-20 flex items-center justify-center shadow-lg border-2 bg-gray-600 border-gray-600 focus:outline-none"
          >
            =
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Calculator;
