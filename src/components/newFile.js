export default (await import('vue')).defineComponent({
name: 'myWeather',
components: {
DaysWeather,
},
props: {
city: String,
},
data() {
return {};
},
});
