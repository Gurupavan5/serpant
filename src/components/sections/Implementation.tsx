import React, { useEffect, useRef, useState } from 'react';
import { Code } from 'lucide-react';

const models = [
  {
    id: 'inceptionv3',
    name: 'InceptionV3',
    description: 'A deep convolutional neural network architecture that utilizes inception modules with factorized convolutions for efficient learning.',
    layers: [
      { name: 'Input Layer', config: 'Shape: (299, 299, 3)' },
      { name: 'Base InceptionV3', config: 'Weights: imagenet, Include Top: False' },
      { name: 'Global Average Pooling', config: '2D pooling' },
      { name: 'Dense Layer', config: '1024 units, ReLU activation' },
      { name: 'Dropout', config: 'Rate: 0.5' },
      { name: 'Dense Layer (Output)', config: '1 unit, Sigmoid activation' }
    ],
    parameters: {
      learningRate: 0.0001,
      batchSize: 32,
      optimizer: 'Adam optimizer with AMSGrad',
      epochs: 50,
      earlyStopping: 'Patience: 10 epochs, Monitor: val_loss'
    },
    code: `from tensorflow.keras.applications import InceptionV3
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout, Input

# Create base model with pre-trained weights
base_model = InceptionV3(weights='imagenet', include_top=False, 
                         input_shape=(299, 299, 3))

# Freeze base model layers
for layer in base_model.layers:
    layer.trainable = False

# Add classification head
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(1024, activation='relu')(x)
x = Dropout(0.5)(x)
predictions = Dense(1, activation='sigmoid')(x)

# Create final model
model = Model(inputs=base_model.input, outputs=predictions)

# Compile model
model.compile(optimizer=Adam(learning_rate=0.0001, amsgrad=True),
              loss='binary_crossentropy',
              metrics=['accuracy'])`
  },
  {
    id: 'efficientnetb0',
    name: 'EfficientNetB0',
    description: 'A compact convolutional neural network that uses compound scaling to balance network depth, width, and resolution.',
    layers: [
      { name: 'Input Layer', config: 'Shape: (224, 224, 3)' },
      { name: 'Base EfficientNetB0', config: 'Weights: imagenet, Include Top: False' },
      { name: 'Global Average Pooling', config: '2D pooling' },
      { name: 'BatchNormalization', config: 'Default parameters' },
      { name: 'Dense Layer', config: '512 units, ReLU activation' },
      { name: 'Dropout', config: 'Rate: 0.4' },
      { name: 'Dense Layer (Output)', config: '1 unit, Sigmoid activation' }
    ],
    parameters: {
      learningRate: 0.0001,
      batchSize: 32,
      optimizer: 'Adam optimizer with AMSGrad',
      epochs: 50,
      earlyStopping: 'Patience: 10 epochs, Monitor: val_loss'
    },
    code: `from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout, BatchNormalization

# Create base model with pre-trained weights
base_model = EfficientNetB0(weights='imagenet', include_top=False, 
                           input_shape=(224, 224, 3))

# Freeze base model layers
for layer in base_model.layers:
    layer.trainable = False

# Add classification head
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = BatchNormalization()(x)
x = Dense(512, activation='relu')(x)
x = Dropout(0.4)(x)
predictions = Dense(1, activation='sigmoid')(x)

# Create final model
model = Model(inputs=base_model.input, outputs=predictions)

# Compile model
model.compile(optimizer=Adam(learning_rate=0.0001, amsgrad=True),
              loss='binary_crossentropy',
              metrics=['accuracy'])`
  },
  {
    id: 'resnet50',
    name: 'ResNet50',
    description: 'A residual neural network that uses skip connections to solve the vanishing gradient problem in deep networks.',
    layers: [
      { name: 'Input Layer', config: 'Shape: (224, 224, 3)' },
      { name: 'Base ResNet50', config: 'Weights: imagenet, Include Top: False' },
      { name: 'Global Average Pooling', config: '2D pooling' },
      { name: 'BatchNormalization', config: 'Default parameters' },
      { name: 'Dense Layer', config: '1024 units, ReLU activation' },
      { name: 'Dropout', config: 'Rate: 0.5' },
      { name: 'Dense Layer', config: '512 units, ReLU activation' },
      { name: 'Dropout', config: 'Rate: 0.3' },
      { name: 'Dense Layer (Output)', config: '1 unit, Sigmoid activation' }
    ],
    parameters: {
      learningRate: 0.00005,
      batchSize: 32,
      optimizer: 'Adam optimizer with AMSGrad',
      epochs: 50,
      earlyStopping: 'Patience: 10 epochs, Monitor: val_loss'
    },
    code: `from tensorflow.keras.applications import ResNet50
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout, BatchNormalization

# Create base model with pre-trained weights
base_model = ResNet50(weights='imagenet', include_top=False, 
                      input_shape=(224, 224, 3))

# Freeze base model layers
for layer in base_model.layers:
    layer.trainable = False

# Add classification head
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = BatchNormalization()(x)
x = Dense(1024, activation='relu')(x)
x = Dropout(0.5)(x)
x = Dense(512, activation='relu')(x)
x = Dropout(0.3)(x)
predictions = Dense(1, activation='sigmoid')(x)

# Create final model
model = Model(inputs=base_model.input, outputs=predictions)

# Compile model
model.compile(optimizer=Adam(learning_rate=0.00005, amsgrad=True),
              loss='binary_crossentropy',
              metrics=['accuracy'])`
  }
];

export default function Implementation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeModel, setActiveModel] = useState('inceptionv3');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const selectedModel = models.find(model => model.id === activeModel);
  
  return (
    <section 
      id="implementation" 
      ref={sectionRef}
      className="py-20 bg-cream-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Implementation</h2>
          
          {/* Model Navigation */}
          <div className="flex flex-wrap bg-white rounded-lg shadow-md mb-8 overflow-hidden">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`py-4 px-6 text-center flex-1 border-b-2 font-medium transition-all duration-200 ${
                  activeModel === model.id 
                    ? 'border-green-700 text-green-700 bg-green-50' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {model.name}
              </button>
            ))}
          </div>
          
          {/* Model Details */}
          {selectedModel && (
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-2">{selectedModel.name}</h3>
                <p className="text-gray-700">{selectedModel.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-4">Model Architecture</h4>
                  <div className="space-y-2">
                    {selectedModel.layers.map((layer, index) => (
                      <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow"
                      >
                        <p className="font-medium text-green-700">{layer.name}</p>
                        <p className="text-sm text-gray-600">{layer.config}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-4">Training Parameters</h4>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
                    <div className="grid grid-cols-2 gap-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Learning Rate</p>
                        <p className="font-medium">{selectedModel.parameters.learningRate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Batch Size</p>
                        <p className="font-medium">{selectedModel.parameters.batchSize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Optimizer</p>
                        <p className="font-medium">{selectedModel.parameters.optimizer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Epochs</p>
                        <p className="font-medium">{selectedModel.parameters.epochs}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Early Stopping</p>
                        <p className="font-medium">{selectedModel.parameters.earlyStopping}</p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-green-700 mb-4 flex items-center">
                    <Code size={18} className="mr-2" /> Model Code
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-80">
                    <pre className="text-gray-100 text-sm font-mono whitespace-pre-wrap">
                      {selectedModel.code}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 mt-8 pt-8">
                <h4 className="text-lg font-medium text-green-700 mb-4">Training Approach</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h5 className="font-medium text-green-800 mb-2">Transfer Learning Strategy</h5>
                    <p className="text-sm text-gray-700">
                      We employed a two-phase training approach:
                    </p>
                    <ol className="list-decimal list-inside text-sm text-gray-700 mt-2 space-y-1">
                      <li>Initially froze all pre-trained layers and trained only the classification head</li>
                      <li>Fine-tuned the model by unfreezing the last few convolutional blocks</li>
                    </ol>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <h5 className="font-medium text-amber-800 mb-2">Challenges & Solutions</h5>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Addressed overfitting using dropout, batch normalization, and data augmentation</li>
                      <li>Implemented class-weighted loss function to handle any class imbalance</li>
                      <li>Used learning rate reduction on plateau to improve convergence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}