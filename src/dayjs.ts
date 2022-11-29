import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import arraySupport from "dayjs/plugin/arraySupport";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(customParseFormat);
dayjs.extend(arraySupport);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Seoul");

export {
  dayjs
};
