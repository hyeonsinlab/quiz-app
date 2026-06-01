import fs from "fs";
import axios from "axios";

type RestCountry = {
  name: {
    common: string;
  };
  cca2: string;
  capital?: string[];
};

async function main() {
  const res = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,capital,cca2"
  );

  const countries = res.data as RestCountry[];

  const quizData = countries
    .filter((c) => c.capital?.length && c.cca2)
    .map((c) => ({
      question: `${c.name.common}의 수도는?`,
      answer: c.capital![0],
      options: [c.capital![0]],
      imageUrl: `https://flagcdn.com/w160/${c.cca2.toLowerCase()}.png`,
    }));

  const fileContent = `export const capitalQuizData = ${JSON.stringify(
    quizData,
    null,
    2
  )} as const;
`;

  fs.writeFileSync("./data/capitalQuiz.ts", fileContent);

  console.log("생성 완료!");
}

main();