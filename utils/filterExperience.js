import { groupBy } from 'lodash';

const groupExperience = (data) => groupBy(data, 'type');

export { groupExperience };
