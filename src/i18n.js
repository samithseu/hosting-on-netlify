import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: "Welcome",
    message: "Short Khmer History",
    txt: "The history of Cambodia, a country in mainland Southeast Asia, can be traced back to Indian civilization. Detailed records of a political structure on the territory of what is now Cambodia first appear in Chinese annals in reference to Funan, a polity that encompassed the southernmost part of the Indochinese peninsula during the 1st to 6th centuries. Centered at the lower Mekong, Funan is noted as the oldest regional Hindu culture, which suggests prolonged socio-economic interaction with maritime trading partners of the Indosphere in the west. By the 6th century a civilization, called Chenla or Zhenla in Chinese annals, firmly replaced Funan, as it controlled larger, more undulating areas of Indochina and maintained more than a singular centre of power.",
  },
  km: {
    welcome: "សូមស្វាគមន៍",
    message: "ប្រវត្តិសាស្ត្របន្តិចរបស់ខ្មែរ",
    txt: 'ប្រវត្តិ​នៃប្រទេស​កម្ពុជាដែលជាប្រទេសមួយ ស្ថិតនៅលើទឹកដីអាស៊ីអាគ្នេយ៍អាចត្រូវបាន តាមដានទៅដល់អរិយធម៌ឥណ្ឌា។ កំណត់ត្រាពេញលេញនៃរចនាសម្ព័ន្ធនយោបាយលើទឹកដីដែលឥឡូវនេះជាកម្ពុជា បានបង្ហាញឱ្យឃើញក្នុងក្រដាសតាមកំណត់ត្រាចិនក្នុងការបញ្ជាក់ពីរបបសូរ្យវង្ស ដែលបានរាប់បញ្ចូលទឹកដីភាគខាងត្បូងនៃឧបទ្វីបឥណ្ឌូចិនចាប់តាំងពីសតវត្សទី១ ដល់សតវត្សទី៦។ ការគ្រប់គ្រងនៅតាមមេគង្គខាងក្រោម សូរ្យវង្សត្រូវបានគេដឹងថាជា​អរិយធម៌​សាសនាព្រះពុទ្ធដំបូងបំផុតនៃតំបន់ ដែលលើកឡើងថាមានអន្តរកម្មសង្គមសេដ្ឋកិច្ចយូរអង្វែងជាមួយដៃគូពាណិជ្ជកម្មសមុទ្រនៃឥណ្ឌាដំបូងបំផុត។ ចាប់តាំងពីសតវត្សទី៦មក អរិយធម៌ដែលគេហៅថា ចេនឡា ឬ ចិនហៅថា "Zhenla" បានជំនួសសូរ្យវង្ស ដោយគ្រប់គ្រងតំបន់ធំជាងមុននៃឥណ្ឌូចិន និងបានរក្សាគេហដ្ឋានការគ្រប់គ្រងជាច្រើន។',
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
