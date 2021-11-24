import api from "../../../utils/api";
import parse from "../../../utils/parse";

export default async function getResults(req, res) {
  const results = `https://api.airtable.com/v0/appY7uS0FL4jgxfIz/results`;
  const tools = `https://api.airtable.com/v0/appY7uS0FL4jgxfIz/tools`;

  const resultsData = await api(results);
  const toolsData = await api(tools);

  const parsedResults = parse(resultsData);
  const parsedTools = parse(toolsData);
  // later, only bring tools that the result needs
  const resultsWithTools = parsedResults.map((result) => {
    const requiredTools = parsedTools.filter(({ tool }) => {
      const recommendedTools = result.recommendedTools || [];
      return recommendedTools.includes(tool);
    });
    return {
      ...result,
      tools: requiredTools,
    };
  });

  res.send(resultsWithTools);
}
