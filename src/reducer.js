export const initialState = {
  input: "",
  val1: "",

  oprator: "",
};
export function reducer(state, action) {
  switch (action.type) {
    case "numInput":
      if (state.input === "" && action.payload === ".") {
        return {
          ...state,
          input: "0" + action.payload,
        };
      }
      if (state.input.includes(".") && action.payload === ".") {
        return {
          ...state,
        };
      }
      return {
        ...state,
        input: state.input + action.payload,
      };
      break;
    case "clear":
      return {
        input: "",
        val1: "",

        oprator: "",
      };
      break;
    case "plusMinus":
      if (state.input === "") {
        return {
          ...state,
        };
      }
      if (state.input.charAt(0) === "-") {
        return {
          ...state,
          input: state.input.replace("-", ""),
        };
      } else {
        return {
          ...state,
          input: "-" + state.input,
        };
      }

      break;
    case "op":
      return {
        ...state,
        oprator: action.payload,
        val1: state.input,
        input: "",
      };

      break;
    case "answer":
      if (state.val1 !== "" && state.input !== "") {
        let valFirst = parseFloat(state.val1);
        let valSecond = parseFloat(state.input);
        let cal;
        switch (state.oprator) {
          case "+":
            cal = valFirst + valSecond;
            break;
          case "-":
            cal = valFirst - valSecond;
            break;
          case "/":
            cal = valFirst / valSecond;
            break;
          case "*":
            cal = valFirst * valSecond;
            break;
          case "%":
            cal = valFirst % valSecond;
            break;
          default:
            console.log("erro");
        }

        let answer = cal.toString();
        if (answer.includes(".")) {
          let periodIndex = answer.indexOf(".");
          answer = answer.slice(0, periodIndex + 3);
        }
        return {
          ...state,
          input: answer,
          val1: "",
          oprator: "",
        };
      }
      return {
        ...state,
      };

      break;
    default:
      return {
        ...state,
        input: "Type again",
        val1: "",
        oprator: "",
      };
  }
}
