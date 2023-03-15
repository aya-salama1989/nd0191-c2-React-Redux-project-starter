import { _saveQuestion } from "../utils/_DATA";

describe("saveQuestion", () => {
  it("will return success if a question in the desired foramat is passed", async () => {
    const testQuestion = { optionOneText:"option 1", optionTwoText :"option 2", author: "Aya Salama" };
    const result = await _saveQuestion(testQuestion);
    expect(result.optionOne.text).toEqual(testQuestion.optionOneText);
    expect(result.optionTwo.text).toEqual(testQuestion.optionTwoText);
    expect(result.author).toEqual(testQuestion.author);
  });
});

describe("error saveQuestion", () => {
  it("will return Error if incorrect data is passed", async () => {
    const testQuestion = { optionOneText:"option 1"};
    await expect(_saveQuestion(testQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
