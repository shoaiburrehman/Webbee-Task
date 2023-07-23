import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import debounce from 'lodash.debounce';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import dayjs from 'dayjs';
import styles from './styles';
import {useTypedSelector} from '../../redux/useTypedSelected';
import TouchablePicker from '../../components/TouchablePicker';
import GeneralButton from '../../components/GeneralButton';
import InputField from '../../components/InputField';
import {Colors} from '../../themes/Colors';
import {icons} from '../../assets';
import {CategoryType} from '../../models/categories.model';
import {FieldTypes} from '../../constants/categoriesConstants';
import {
  addCategories,
  updateCategories,
} from '../../redux/reducers/categories.slice';

type Props = {
  navigation: any;
  route: any;
};

const ManageCategoriesScreen = (props: Props) => {
  const taskDetail = props?.route?.params?.taskDetail;
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(taskDetail?.description || '');
  const [status, setStatus] = useState(taskDetail?.status || '');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isDate, setIsDate] = useState(false);
  let formatDate = dayjs(date).format('DD-MM-YYYY');
  const [selectedLanguage, setSelectedLanguage] = useState('Add New Field');
  const options = [
    {
      label: 'Add New Field',
      value: null,
    },
    {
      label: 'Text',
      value: 'Text',
    },
    {
      label: 'String',
      value: 'String',
    },
    {
      label: 'Checkbox',
      value: 'Checkbox',
    },
    {
      label: 'Number',
      value: 'Number',
    },
  ];

  const categoriesList = useTypedSelector(state => state.categories.categories);
  // const [categoriesList, setCategoriesList] = useState(categories);

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>No Categories Added</Text>
      </View>
    );
  };

  type renderPropType = {
    item: CategoryType;
    index: number;
  };

  const handleChange = (
    key: string,
    val: string | boolean,
    item: CategoryType,
  ) => {
    // setCategoriesList(prev => {
    //   return {
    //     ...prev,
    //     [key]: val,
    //   };
    // });
    let categories = [...categoriesList];
    categories.map((cat, index) => {
      if (cat.Id === item.Id) {
        cat = {
          ...cat,
          [key]: val,
        };
      }
      return cat;
    });
    dispatch(updateCategories(categories));
  };

  const updateCategory = (text: string, item: CategoryType) => {
    console.log('text: ', text);
    setTimeout(() => {
      let categories = [...categoriesList];
      categories.map((cat, index) => {
        if (cat.Id === item.Id) {
          cat.CategoryName = text;
        }
        return cat;
      });
      dispatch(updateCategories(categories));
    }, 500);
  };

  const changeTextDebouncer = (text, item) => {
    console.log('text inside: ', text);
    setTimeout(() => {
      let categories = [...categoriesList];
      categories.map((cat, index) => {
        if (cat.Id === item.Id) {
          cat.CategoryName = text;
        }
        return cat;
      });
      dispatch(updateCategories(categories));
    }, 500);
  };

  const renderFields = ({item, index}: renderPropType) => {
    console.log('item: ', item);
    return (
      <View key={index} style={styles.fieldsView}>
        <Text style={styles.categoryHead}>{item.CategoryName}</Text>
        <InputField
          title="Category Name"
          placeholder="Enter Category Name"
          value={item.CategoryName}
          onChangeText={e => handleChange('CategoryName', e, item)}
          textInputContainer={{width: '90%'}}
        />
        {/* <TouchableInput
          title="Deadline"
          placeholder="Select Deadline"
          value={
            taskDetail?.deadline && !isDate
              ? taskDetail?.deadline
              : formatDate
              ? formatDate
              : null
          }
          onPress={() => setOpen(true)}
        /> */}
        <InputField
          title="Field"
          placeholder="Enter Field"
          value={description}
          fieldType={'string'}
          icon={true}
          onChangeText={setDescription}
        />
        <GeneralButton
          text={'Title FIeld'}
          style={[styles.titleField]}
          textStyle={styles.btnText}
          // onPress={handleCreate}
        />
        <View style={styles.flexRow}>
          <TouchablePicker
            options={options}
            mode={'dialog'}
            selectedValue={'Add New Field'}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            dropdownIconColor={Colors.PRIMARY_COLOR}
            style={styles.picker}
          />

          <TouchableOpacity
            style={[styles.flexRow, styles.touchable]}
            // onPress={handleIconPress}
          >
            <Image
              source={icons.delete}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleAddCategory = () => {
    let Category: CategoryType = {
      Id: dayjs(),
      CategoryName: 'New Category',
      Fields: [
        {
          FieldName: '',
          FieldType: FieldTypes.TEXT,
        },
      ],
      TitleField: 'Unnamed Field',
    };
    dispatch(addCategories(Category));
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.subContainer}
        enableOnAndroid={true}
        extraHeight={100}
        extraScrollHeight={100}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={categoriesList}
          keyExtractor={index => index.toString()}
          ListEmptyComponent={renderEmptyComponent}
          renderItem={(item, index) => renderFields(item, index)}
        />
      </KeyboardAwareScrollView>
      <GeneralButton
        text={'Add Category'}
        style={[styles.btn]}
        textStyle={styles.btnText}
        onPress={handleAddCategory}
      />
      <DatePicker
        modal
        mode={'date'}
        open={open}
        date={date}
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setIsDate(true);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default ManageCategoriesScreen;
