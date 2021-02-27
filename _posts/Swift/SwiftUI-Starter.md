# Getting started with SwiftUI

## What is SwiftUI?

SwiftUI is a declarative User-Interface framework for iOS, iPadOs, macOs and tvOs by Apple. Otherwise as in UIKit you rather describe how your
UI should look like instead of describing how it should be build.

This is an example of a button in SwiftUI:
```
Button("Click me") {
    print("Button clicked!")
}
```

However, let's start at the beginning.

### Creating a SwiftUI project.

The process of creating SwiftUI projects is basically the same as for UIKit projects.

1. Open Xcode
2. Click `Create a new Xcode project`
3. Select the Platform for which you want to build an app
4. Click `Next`
5. Enter the name of you project
6. In the Interface drop down menu select: `SwiftUI`
7. In the Life Cycle drop down menu select: `SwiftUI App`
8. Click `Next` 

### First steps with SwiftUI

Now, when Xcode created your project, open the `ContentView.swift` file.
You will see the first SwiftUI code. Let's go through each part.

In SwiftUI we are working with views. Inside of these views we describe how our UI should look like.

`struct ContentView: View` is how you define your view struct. 
`View` is the protocol provided by SwiftUI to define views.

Inside of the `var body: some View` computed property we define our view.
SwiftUI will use this `body` property each time something (our data) changes to redraw the UI.




