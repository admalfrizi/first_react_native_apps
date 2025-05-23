import CategoryGridTile from '../components/CategoryGridTiles';
import {CATEGORIES} from '../data/dummy_data'
import { FlatList } from 'react-native'

function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData){

        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onPress={pressHandler}
            navigation={navigation}
        />;
    }

    return <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
    />;
}

export default CategoriesScreen;