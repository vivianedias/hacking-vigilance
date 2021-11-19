import api from "../../../utils/api";
import parse from "../../../utils/parse";

export default async function getQuestion(id) {
  const questionUrl = `https://api.airtable.com/v0/appY7uS0FL4jgxfIz/question?filterByFormula=%7Bid%7D+%3D+${id}`;
  const answersUrl = `https://api.airtable.com/v0/appY7uS0FL4jgxfIz/answers?filterByFormula=%7BquestionId%7D+%3D+${id}&maxRecords=4`;

  const questionData = await api(questionUrl);
  const answersData = await api(answersUrl);

  return {
    ...parse(questionData)[0],
    answers: parse(answersData),
  };
}
