import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Everton');
summary.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithConsoleReport('Everton');
summary2.buildAndPrintReport(matchReader.matches);
